import Select from 'react-select'

const CreateBio = () => {

    const type = [
        { value: 'male', label: 'male' },
        { value: 'female', label: 'female' },

    ]

    const division = [
        { value: 'Dhaka', label: 'Dhaka' },
        { value: 'Barishal', label: 'Barishal' },
        { value: 'Jessore', label: 'Jessore' },
        { value: 'Sylhet', label: 'Sylhet' },
        { value: 'Khulna', label: 'Khulna' },

    ]
    const present = [
        { value: 'Dhaka', label: 'Dhaka' },
        { value: 'Barishal', label: 'Barishal' },
        { value: 'Jessore', label: 'Jessore' },
        { value: 'Sylhet', label: 'Sylhet' },
        { value: 'Khulna', label: 'Khulna' },

    ]

    return (
        <div className='ml-10 w-56'>
            <form>
                <div>
                    <Select name='type' options={type} />
                    <div>
                        <span className="">Your Name</span><br />
                        <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" required placeholder="Your name" name="name" type="text" />
                    </div>
                    <div>
                        <span className="">Photo</span><br />
                        <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" required placeholder="Photo" name="photo" type="text" />
                    </div>
                    <div>
                        <span className="">Date of Birth</span><br />
                        <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" required placeholder="Date of birth" name="birth" type="text" />
                    </div>
                    <div>
                        <span className="">Height</span><br />
                        <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" required placeholder="Height" name="height" type="text" />
                    </div>
                    <div>
                        <span className="">Weight</span><br />
                        <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" required placeholder="weight" name="weight" type="text" />
                    </div>
                    <div>
                        <span className="">Age</span><br />
                        <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" required placeholder="age" name="age" type="text" />
                    </div>
                    <div>
                        <span className="">Fathers Name</span><br />
                        <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" required placeholder="father" name="father" type="text" />
                    </div>
                    <div>
                        <span className="">Mothers Name</span><br />
                        <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" required placeholder="mother" name="mother" type="text" />
                    </div>
                    <div>
                        <span className="">Permanent</span><br />
                        <Select name='type' options={division} />
                    </div>
                    <div>
                        <span className="">Present</span><br />
                        <Select name='type' options={present} />
                    </div>
                    <div>
                        <span className="">Expected Partner age</span><br />
                        <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" required placeholder="expected Age" name="exage" type="text" />
                    </div>
                    <div>
                        <span className="">Expected partner height</span><br />
                        <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" required placeholder="expected height" name="expheight" type="text" />
                    </div>
                    <div>
                        <span className="">Expected partner weight</span><br />
                        <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" required placeholder="expected weight" name="expweight" type="text" />
                    </div>
                    <div>
                        <span className="">Email</span><br />
                        <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" required placeholder="email" name="email" type="text" />
                    </div>
                    <div>
                        <span className="">Phone</span><br />
                        <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" required placeholder="Phone" name="Phone" type="text" />
                    </div>

                </div>
            </form>
        </div>
    );
};

export default CreateBio;