import axios from 'axios';
import { useState } from 'react';

const CreateBio = () => {


    

    const [formData, setForm] = useState({
        biodataType: 'male',
        name: '',
        profileImage: '',
        dateOfBirth: '',
        height: '',
        weight: '',
        age: '',
        occupation: '',
        race: '',
        fathersName: '',
        mothersName: '',
        permanentDivision: '',
        presentDivision: '',
        expectedPartnerAge: '',
        expectedPartnerHeight: '',
        expectedPartnerWeight: '',
        email: '',
        mobile: '',
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('https://match-mingle-server.vercel.app/add', formData, {
                headers: {
                    'Content-Type': 'application/json',
                    // add any additional headers if needed
                },
            });

            console.log('Data posted successfully:', response.data);
        } catch (error) {
            console.error('Error posting data:', error.message);
        }
    };


    return (

        <div className="lg:w-[800px] lg:ml-[700px] mt-10 pl-16 p-6 bg-white rounded-md shadow-md">
                    <div className='text-4xl mt-2 mb-2 lg:ml-36 font-bold text-blue-900'>
                        ADD Your Bio data
                    </div>
            <form onSubmit={handleSubmit}>
                <div className='flex gap-8'>
                    <div>
                        <label className="block text-sm font-semibold text-gray-600 mb-2">
                            Biodata Type:
                            <select className="w-full border bg-indigo-600 text-black p-2 rounded-md" name="biodataType" value={formData.biodataType} onChange={handleChange}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </label>

                        <label className="block text-sm font-semibold text-gray-600 mb-2">
                            Name:
                            <input className='w-full bg-emerald-600 h-8 font-semibold text-black rounded-lg' type="text" name="name" value={formData.name} onChange={handleChange} />
                        </label>

                        <label className="block text-sm font-semibold text-gray-600 mb-2">
                            Profile Image:
                            <input type="text" className='bg-emerald-600  font-semibold text-black' name="profileImage" onChange={handleChange} />
                        </label>

                        <label className="block text-sm font-semibold text-gray-600 mb-2">
                            Date of Birth:
                            <input type="date" className='bg-emerald-600 font-semibold text-black' name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
                        </label>

                        <label className="block text-sm font-semibold text-gray-600 mb-2">
                            Height:
                            <select className="w-full bg-indigo-600 text-black border p-2 rounded-md" name="height" value={formData.height} onChange={handleChange}>
                                <option value="short">Short</option>
                                <option value="average">Average</option>
                                <option value="tall">Tall</option>
                            </select>
                        </label>

                        <label className="block text-sm font-semibold text-gray-600 mb-2">
                            Weight:
                            <select className="w-full bg-indigo-600 text-black border p-2 rounded-md" name="weight" value={formData.weight} onChange={handleChange}>
                                <option value="light">Light</option>
                                <option value="average">Average</option>
                                <option value="heavy">Heavy</option>
                            </select>
                        </label>

                        <label className="block text-sm font-semibold text-gray-600 mb-2">
                            Age:
                            <input className='w-full bg-emerald-600 h-8 font-semibold text-black rounded-lg' type="text" name="age" value={formData.age} onChange={handleChange} />
                        </label>

                        <label className="block text-sm font-semibold text-gray-600 mb-2">
                            Occupation:
                            <select className="w-full bg-indigo-600 text-black border p-2 rounded-md" name="occupation" value={formData.occupation} onChange={handleChange}>
                                <option value="light">Teacher</option>
                                <option value="average">Job</option>
                                <option value="heavy">House wife</option>
                            </select>
                        </label>

                        <label className="block text-sm font-semibold text-gray-600 mb-2">
                            Fathers Name:
                            <input className='w-full bg-emerald-600 h-8 font-semibold text-black rounded-lg' type="text" name="fathersName" value={formData.fathersName} onChange={handleChange} />
                        </label>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-600 mb-2">
                            Mothers Name:
                            <input className='w-full bg-emerald-600 h-8 font-semibold text-black rounded-lg' type="text" name="mothersName" value={formData.mothersName} onChange={handleChange} />
                        </label>

                        <label className="block text-sm font-semibold text-gray-600 mb-2">
                            Present Division:
                            <select className="w-full bg-indigo-600 text-black border p-2 rounded-md" name="presentDivision" value={formData.presentDivision} onChange={handleChange}>
                                <option value="Dhaka">Dhaka</option>
                                <option value="Chottogram">Chottogram</option>
                                <option value="Rangpur">Rangpur</option>
                                <option value="Barishal">Barishal</option>
                                <option value="Khulna">Khulna</option>
                                <option value="Mymenshingh">Mymenshingh</option>
                                <option value="Sylhet">Sylhet</option>
                            </select>
                        </label>
                        <label className="block text-sm font-semibold text-gray-600 mb-2">
                            Permanent Division:
                            <select className="w-full bg-indigo-600 text-black border p-2 rounded-md" name="permanentDivision" value={formData.permanentDivision} onChange={handleChange}>
                                <option value="Dhaka">Dhaka</option>
                                <option value="Chottogram">Chottogram</option>
                                <option value="Rangpur">Rangpur</option>
                                <option value="Barishal">Barishal</option>
                                <option value="Khulna">Khulna</option>
                                <option value="Mymenshingh">Mymenshingh</option>
                                <option value="Sylhet">Sylhet</option>
                            </select>
                        </label>

                        <label className="block text-sm font-semibold text-gray-600 mb-2">
                            Expected Partner age:
                            <input className='w-full bg-emerald-600 h-8 font-semibold text-black rounded-lg' type="text" name="expectedPartnerAge" value={formData.expectedPartnerAge} onChange={handleChange} />
                        </label>

                        <label className="block text-sm font-semibold text-gray-600 mb-2">
                            Expected Partner Height:
                            <select className="w-full bg-indigo-600 text-black border p-2 rounded-md" name="expectedPartnerHeight" value={formData.expectedPartnerHeight} onChange={handleChange}>
                                <option value="short">Short</option>
                                <option value="average">Average</option>
                                <option value="tall">Tall</option>
                            </select>
                        </label>

                        <label className="block text-sm font-semibold text-gray-600 mb-2">
                            Expected Partner Weight:
                            <select className="w-full bg-indigo-600 text-black border p-2 rounded-md" name="expectedPartnerWeight" value={formData.expectedPartnerWeight} onChange={handleChange}>
                                <option value="light">Light</option>
                                <option value="average">Average</option>
                                <option value="heavy">Heavy</option>
                            </select>
                        </label>

                        <label className="block text-sm font-semibold text-gray-600 mb-2">
                            Email:
                            <input className='w-full bg-emerald-600 h-8 font-semibold text-black rounded-lg' type="text" name="email" value={formData.email} onChange={handleChange} />
                        </label>

                        <label className="block text-sm font-semibold text-gray-600 mb-2">
                            Phone:
                            <input className='w-full bg-emerald-600 h-8 font-semibold text-black rounded-lg' required type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
                        </label>
                    </div>
                </div>

                <button className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                    type="submit">Submit</button>
            </form>

        </div>


    );
};

export default CreateBio;