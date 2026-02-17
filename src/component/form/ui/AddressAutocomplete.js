"use client";
import { useEffect, useRef, useState } from "react";
import { IoLocationSharp } from "react-icons/io5";

const AddressAutocomplete = ({ field, formData, handleChange }) => {
  const { name, placeholder, label } = field;
  const [query, setQuery] = useState(formData[name] || "");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const autocompleteService = useRef(null);
  const placesService = useRef(null);

  // Google Maps API initialize
  useEffect(() => {
    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA1KF6rwYd2Za6Xyh3qZC7y-hDKUxFSStA&libraries=places`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      script.onload = () => {
        initializeServices();
      };
    } else {
      initializeServices();
    }
  }, []);

  const initializeServices = () => {
    autocompleteService.current =
      new window.google.maps.places.AutocompleteService();
    placesService.current = new window.google.maps.places.PlacesService(
      document.createElement("div"),
    );
  };

  // Update query when formData changes
  useEffect(() => {
    setQuery(formData[name] || "");
  }, [formData[name], name]);

  // Fetch predictions from Google Places
  const fetchPredictions = (input) => {
    if (!autocompleteService.current || input.length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    setIsLoading(true);

    // এখানে country restriction সরিয়ে দিয়েছি - এখন সব দেশ দেখাবে
    autocompleteService.current.getPlacePredictions(
      {
        input: input,
        types: ["geocode"], // 'geocode' মানে ঠিকানা
        // componentRestrictions: { country: 'us|gb|bd|ca|au' } // এই লাইনটি কমেন্ট করে দিয়েছি
      },
      (predictions, status) => {
        setIsLoading(false);
        if (
          status === window.google.maps.places.PlacesServiceStatus.OK &&
          predictions
        ) {
          setSuggestions(predictions.slice(0, 8));
          setShowSuggestions(true);
        } else {
          setSuggestions([]);
          setShowSuggestions(false);
        }
      },
    );
  };

  // Debounce effect for API calls
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (query.length > 1) {
        fetchPredictions(query);
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [query]);

  // Get place details when user selects a suggestion
  const getPlaceDetails = (placeId) => {
    if (!placesService.current) return;

    placesService.current.getDetails(
      {
        placeId: placeId,
        fields: ["formatted_address", "name", "geometry", "address_components"],
      },
      (place, status) => {
        if (
          status === window.google.maps.places.PlacesServiceStatus.OK &&
          place
        ) {
          const fullAddress = place.formatted_address;
          setQuery(fullAddress);
          setShowSuggestions(false);

          // Find country and city from address components
          const country =
            place.address_components?.find((c) => c.types.includes("country"))
              ?.long_name || "";

          const city =
            place.address_components?.find(
              (c) =>
                c.types.includes("locality") ||
                c.types.includes("postal_town") ||
                c.types.includes("administrative_area_level_2"),
            )?.long_name || "";

          const postalCode =
            place.address_components?.find((c) =>
              c.types.includes("postal_code"),
            )?.long_name || "";

          const street =
            place.address_components?.find((c) => c.types.includes("route"))
              ?.long_name || "";

          const streetNumber =
            place.address_components?.find((c) =>
              c.types.includes("street_number"),
            )?.long_name || "";

          // Send full address to parent component
          handleChange(name, fullAddress);

          // Also send individual components if needed (optional)
          handleChange(`${name}_country`, country);
          handleChange(`${name}_city`, city);
          handleChange(`${name}_postalCode`, postalCode);
          handleChange(`${name}_street`, street);
          handleChange(`${name}_streetNumber`, streetNumber);
        }
      },
    );
  };

  const handleSelect = (prediction) => {
    getPlaceDetails(prediction.place_id);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    handleChange(name, value); // Update form data as user types
  };

  const handleInputFocus = () => {
    if (query.length > 1 && suggestions.length > 0) {
      setShowSuggestions(true);
    }
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      setShowSuggestions(false);
    }, 200);
  };

  // Fallback suggestions for common cities
  const worldCities = [
    "New York, USA",
    "Los Angeles, USA",
    "Chicago, USA",
    "London, UK",
    "Manchester, UK",
    "Birmingham, UK",
    "Toronto, Canada",
    "Vancouver, Canada",
    "Sydney, Australia",
    "Melbourne, Australia",
    "Paris, France",
    "Berlin, Germany",
    "Tokyo, Japan",
    "Dubai, UAE",
    "Singapore",
    "Dhaka, Bangladesh",
    "Mumbai, India",
    "Delhi, India",
    "Karachi, Pakistan",
  ];

  const getFallbackSuggestions = (input) => {
    return worldCities
      .filter((city) => city.toLowerCase().includes(input.toLowerCase()))
      .slice(0, 8);
  };

  const displaySuggestions =
    suggestions.length > 0
      ? suggestions
      : query.length > 1
        ? getFallbackSuggestions(query)
        : [];

  return (
    <div className='mb-4 relative'>
      {label && (
        <label className='block text-gray-700 font-medium mb-2'>{label}</label>
      )}
      <div className='relative'>
        <input
          type='text'
          name={name}
          value={query}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder={placeholder || "Enter your address"}
          className='w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#633826] transition-colors pl-12'
          autoComplete='off'
        />
        <IoLocationSharp className='absolute left-4 top-1/2 transform -translate-y-1/2 text-[#633826] text-xl' />

        {isLoading && (
          <div className='absolute right-3 top-1/2 transform -translate-y-1/2'>
            <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-[#633826]'></div>
          </div>
        )}
      </div>

      {/* Suggestions Dropdown */}
      {showSuggestions && displaySuggestions.length > 0 && (
        <div className='absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto'>
          {displaySuggestions.map((item, index) => (
            <div
              key={index}
              className='px-4 py-3 cursor-pointer hover:bg-[#633826] hover:text-white border-b border-gray-200 last:border-b-0 transition-colors duration-200'
              onClick={() =>
                item.place_id
                  ? handleSelect(item)
                  : handleSelect({ place_id: item.place_id, description: item })
              }
              onMouseDown={(e) => e.preventDefault()}>
              {item.description || item}
            </div>
          ))}
        </div>
      )}

      {showSuggestions &&
        displaySuggestions.length === 0 &&
        query.length > 1 && (
          <div className='absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg'>
            <div className='px-4 py-3 text-gray-500 text-center'>
              No addresses found
            </div>
          </div>
        )}
    </div>
  );
};

export default AddressAutocomplete;
