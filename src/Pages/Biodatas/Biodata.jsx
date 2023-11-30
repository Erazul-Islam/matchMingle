import { useState } from "react";
import BiodataCard from "./BiodataCard";
import { useLoaderData } from "react-router-dom";
import { CaretRight } from "phosphor-react";
import { Dropdown } from "keep-react";
import usePremeium from "../../Hooks/usePremeium";


const Biodata = () => {

    const [isPremeium] = usePremeium();
    console.log(isPremeium)

    const datas = useLoaderData()

    const [genderFilter, setGenderFilter] = useState(null)
    const [division, setDivision] = useState(null)

    const filteredByGender = (selectedGender) => {

        setGenderFilter(selectedGender)
    }

    

    const filterByDivision = (selectedDivision) => {

        setDivision(selectedDivision)
    }

    const clearAllFilters = () => {
        setGenderFilter(null);
        setDivision(null);
    };

    const filteredProfiles = datas.filter(data => {
        const genderMatch = !genderFilter || data.type === genderFilter;
        
        const divisionMatch = !division || data.division === division;
        return genderMatch, divisionMatch

    })

    return (
        <div>
            <button onClick={() => filteredByGender('male')} >Male</button>
            <button className="ml-7" onClick={() => filteredByGender('female')} >Female</button>
            <button className="ml-7" onClick={clearAllFilters}>Clear Filters</button>

            <Dropdown
                label="Division"
                type="primary"
                size="sm"
                className="text-amber-600"
                dismissOnClick={true}
            >

                <Dropdown.Item onClick={() => filterByDivision('Dhaka')}>
                    Dhaka
                    <span className="ml-auto">
                        <CaretRight size={20} color="#5E718D" />
                    </span>
                </Dropdown.Item>
                <Dropdown.Item onClick={() => filterByDivision('Barishal')}>
                    Barishal
                    <span className="ml-auto">
                        <CaretRight size={20} color="#5E718D" />
                    </span>
                </Dropdown.Item>
                <Dropdown.Item onClick={() => filterByDivision('Khulna')}>
                    Khulna
                    <span className="ml-auto">
                        <CaretRight size={20} color="#5E718D" />
                    </span>
                </Dropdown.Item>
                <Dropdown.Item onClick={() => filterByDivision('Sylhet')}>
                    Sylhet
                    <span className="ml-auto">
                        <CaretRight size={20} color="#5E718D" />
                    </span>
                </Dropdown.Item>
                <Dropdown.Item onClick={() => filterByDivision('Jessore')}>
                    Jessore
                    <span className="ml-auto">
                        <CaretRight size={20} color="#5E718D" />
                    </span>
                </Dropdown.Item>
            </Dropdown>

            <div className="lg:ml-60 mt-20 mb-10 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
                {
                    filteredProfiles.map(profile => <BiodataCard profile={profile} key={profile._id}></BiodataCard>)
                }
            </div>
        </div>
    );
};

export default Biodata;