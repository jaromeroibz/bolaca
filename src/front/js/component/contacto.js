import React, {useState} from "react";


export const Contacto = () =>{

const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

const handleSubmit = (e) => {
e.preventDefault();
// Handle form submission (e.g., send data to a server)
alert(`Form submitted: \nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
};
    
return(
    <div className="container">
        <div className="card">
            <div className="card-body">
                <h3>Dejanos tu mensaje</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    </div>
                    <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    </div>
                    <div>
                    <label>Message:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    </div>
)

}

