 export const renderField = (field) => {
    const { type, name, placeholder, options } = field;

    switch (type) {
      case "text":
        return (
          <input
            type='text'
            name={name}
            placeholder={placeholder}
            value={formData[name] || ""}
            onChange={(e) => handleChange(name, e.target.value)}
            className='w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#633826] transition-colors'
          />
        );

      case "textarea":
        return (
          <textarea
            name={name}
            placeholder={placeholder}
            value={formData[name] || ""}
            onChange={(e) => handleChange(name, e.target.value)}
            className='w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#633826] transition-colors min-h-[120px]'
          />
        );

      case "radio":
        return (
          <div className='flex gap-6 flex-wrap'>
            {options.map((opt) => (
              <label
                key={opt.value}
                className='flex items-center gap-2 cursor-pointer'>
                <input
                  type='radio'
                  name={name}
                  value={opt.value}
                  checked={formData[name] === opt.value}
                  onChange={(e) => handleChange(name, e.target.value)}
                  className='w-4 h-4 text-[#633826] focus:ring-[#633826]'
                />
                <span className='text-gray-700'>{opt.label}</span>
              </label>
            ))}
          </div>
        );

      case "select":
        return (
          <select
            name={name}
            value={formData[name] || ""}
            onChange={(e) => handleChange(name, e.target.value)}
            className='w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#633826] transition-colors bg-white'>
            <option value=''>Select {placeholder}</option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        );

      case "date":
        return (
          <input
            type='date'
            name={name}
            value={formData[name] || ""}
            onChange={(e) => handleChange(name, e.target.value)}
            className='w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#633826] transition-colors'
          />
        );

      case "file":
        return (
          <input
            type='file'
            name={name}
            onChange={(e) => handleChange(name, e.target.files[0])}
            className='w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#633826] transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#633826] file:text-white hover:file:bg-[#7a4a2e] cursor-pointer'
          />
        );

      case "password":
        return (
          <input
            type='password'
            name={name}
            placeholder={placeholder}
            value={formData[name] || ""}
            onChange={(e) => handleChange(name, e.target.value)}
            className='w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#633826] transition-colors'
          />
        );

      case "email":
        return (
          <input
            type='email'
            name={name}
            placeholder={placeholder}
            value={formData[name] || ""}
            onChange={(e) => handleChange(name, e.target.value)}
            className='w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#633826] transition-colors'
          />
        );

      case "tel":
        return (
          <input
            type='tel'
            name={name}
            placeholder={placeholder}
            value={formData[name] || ""}
            onChange={(e) => handleChange(name, e.target.value)}
            className='w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#633826] transition-colors'
          />
        );

      default:
        return null;
    }
  };