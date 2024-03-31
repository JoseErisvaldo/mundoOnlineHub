import React, { useState } from 'react';

export default function GenericForm ({onSubmit,fields,initialValues, submit}) {
  const [formData, setFormData] = useState(initialValues || {});

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form className='flex flex-col gap-2 items-center' onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div className="w-full flex flex-wrap flex-row items-center justify-between gap-1 " key={field.name}>
          <label className=' font-bold' htmlFor={field.name}>{field.label}</label>
          {field.type === 'select' ? (
            <select
              id={field.name}
              className="border p-2  "
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
            >
              {field.options && field.options.map((option) => (
                <option className='' key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type || 'text'}
              id={field.name}
              className="pl-2 border-2 w-full"
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              placeholder={field.placeholder}
            />
          )}
        </div>
      ))}
      <button type="submit" className="w-full bg-green-600 hover:bg-green-500 text-white p-2 rounded">
        {submit}
      </button>
    </form>
  )
}