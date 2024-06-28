import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavItem } from "../Components/NavItem";
import { Button } from "../Components/Button";
import { useNavigate } from "react-router-dom";
import { Header } from "../Components/Header";

const InputField = ({ label, value, placeholder, onChange }) => (
    <div className="flex flex-col flex-1 grow shrink-0 justify-center py-1 basis-0 w-fit max-md:max-w-full">
        <label className="justify-center self-start text-sm font-medium leading-5 text-gray-700">
            {label}
        </label>
        <input
            className="justify-center py-1.5 mt-2.5 text-base leading-6 bg-white rounded-md shadow-sm text-zinc-700 max-md:max-w-full"
            placeholder={placeholder}
            aria-label={label}
            value={value}
            onChange={onChange}
        />
    </div>
);


const TextField = ({ label, value }) => (
    <div className="flex flex-col justify-center py-1 mt-4 max-w-full w-[584px]">
        <label className="justify-center self-start text-sm font-medium leading-5 text-gray-700">
            {label}
        </label>
        <input
            className="justify-center py-1.5 mt-2.5 text-base leading-6 bg-white rounded-md shadow-sm max-md:max-w-full"
            defaultValue={value}
            aria-label={label}
            readOnly
        />
    </div>
);



const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^(\+98|0)?9\d{9}$/;
    return phoneRegex.test(phoneNumber);
};


export default function EditProfileForm() {

    const navigate = useNavigate();

    const [profile, setProfile] = useState({
        username: '',
        first_name: '',
        last_name: '',
        medical_council_number: '',
        province: '',
        city: '',
        address: '',
        phone_number: '',
    });
    const [error, setError] = useState('');

    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/users/current_user/', {
                    headers: {
                        'Authorization': `Token ${token}`
                    }
                });

                console.log('Profile data:', response.data);

                setProfile(response.data);
            } catch (error) {
                console.error('There was an error fetching the profile data!', error);
                alert(error)
            }
        };

        fetchProfile();
    }, [token]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({
            ...profile,
            [name]: value,
        });
    };

    const onSubmit = async (e) => {

        e.preventDefault();
        if (!validatePhoneNumber(profile.phone_number)) {
            setError("Invalid phone number format. It should match the pattern ^(\+98|0)?9\\d{9}$.");
            alert("Invalid phone number format. It should match the pattern ^(\+98|0)?9\\d{9}$.");
            return;
        }

        console.log('Submitting profile:', profile);

        try {
            const response = await axios.post('http://localhost:8000/api/users/update_current_user/', profile, {
                headers: {
                    'Authorization': `Token ${token}`,
                    'Content-Type': 'application/json',
                }
            });

            if (response.status !== 200) {
                throw new Error('Network response was not ok');
            }

            console.log('Profile updated successfully');
            setError('');  // Clear any previous error messages
            // go back
            navigate("/dentistdashboard");
        } catch (error) {
            console.error('Failed to update profile:', error);
            setError('Failed to update profile.');
        }
    };

    return (
        <main className="flex flex-col justify-center px-4 pt-8 pb-20 bg-gray-100">
            <Header current={"Dashboard"} />
            <section className="flex flex-col justify-center max-md:max-w-full">
                <article className="flex flex-col justify-center px-8 py-8 bg-white rounded-lg shadow max-md:px-5 max-md:max-w-full">
                    <header className="flex flex-col justify-center items-start py-2 text-xl font-semibold leading-7 text-gray-700 max-md:pr-5 max-md:max-w-full">
                        <h1 className="justify-center">Edit Profile</h1>
                    </header>
                    <form className="flex flex-col justify-center mt-4 max-md:max-w-full" onSubmit={onSubmit}>
                        <div className="flex flex-col py-0.5 max-md:max-w-full">
                            <div className="flex gap-4 max-md:flex-wrap">
                                <TextField label="First Name" value={profile.first_name} />
                                <TextField label="Last Name" value={profile.last_name} />
                            </div>
                            <div className="flex gap-4 mt-4 max-md:flex-wrap">
                                <TextField label="Medical Council Number" value={profile.medical_council_number} />
                                <InputField
                                    label="Province"
                                    value={profile.province}
                                    onChange={(e) => handleChange({ target: { name: 'province', value: e.target.value } })}
                                    placeholder={"Enter Province"}
                                />
                            </div>
                            <div className="flex gap-4 mt-4 max-md:flex-wrap">
                                <InputField
                                    label="City"
                                    value={profile.city}
                                    onChange={(e) => handleChange({ target: { name: 'city', value: e.target.value } })}
                                    placeholder={"Enter City"}
                                />
                                <InputField
                                    label="Address"
                                    value={profile.address}
                                    onChange={(e) => handleChange({ target: { name: 'address', value: e.target.value } })}
                                    placeholder={"Enter Address"}
                                />
                            </div>
                            <div className="flex flex-col justify-center py-1 mt-4 max-w-full w-[584px]">
                                <InputField
                                    label="Phone Number"
                                    className="justify-center py-1.5 mt-2.5 text-base leading-6 bg-white rounded-md shadow-sm max-md:max-w-full"
                                    value={profile.phone_number}
                                    onChange={(e) => handleChange({ target: { name: 'phone_number', value: e.target.value } })}
                                    aria-label="Phone Number"
                                    placeholder="Enter Phone Number"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <Button text="Save Changes" type="submit" />
                        </div>
                    </form>
                </article>
            </section>
        </main>
    );
}