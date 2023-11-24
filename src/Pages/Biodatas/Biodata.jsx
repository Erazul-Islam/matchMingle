import { useState } from "react";
import BiodataCard from "./BiodataCard";
import { useLoaderData } from "react-router-dom";
import { CaretRight } from "phosphor-react";
import { Dropdown } from "keep-react";


const Biodata = () => {

    const datas = useLoaderData()

    const [genderFilter, setGenderFilter] = useState(null)
    const [ageRangeFilter, setAgeRangeFilter] = useState({ min: 0, max: 100 });
    const [division, setDivision] = useState(null)

    const filteredByGender = (selectedGender) => {

        setGenderFilter(selectedGender)
    }

    const filterByAgeRange = (min, max) => {

        setAgeRangeFilter({ min, max });
    };

    const filterByDivision = (selectedDivision) => {

        setDivision(selectedDivision)
    }

    const clearAllFilters = () => {
        setGenderFilter(null);
        setAgeRangeFilter({ min: 0, max: 100 });
        setDivision(null);
    };

    const filteredProfiles = datas.filter(data => {
        const genderMatch = !genderFilter || data.type === genderFilter;
        const ageMatch = data.age >= ageRangeFilter.min && data.age <= ageRangeFilter.max;
        const divisionMatch = !division || data.division === division;
        return genderMatch, divisionMatch, ageMatch

    })

    return (
        <div>
            <button onClick={() => filteredByGender('male')} >Male</button>
            <button className="ml-7" onClick={() => filteredByGender('female')} >Female</button>
            <button className="ml-7" onClick={() => filteredByGender(null)} >All</button>
            <button className="ml-7" onClick={clearAllFilters}>Clear Filters</button>

            <Dropdown
                label="Division"
                type="primary"
                size="sm"
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

            <div>
                <label>Age Range:</label>
                <input
                    type="number"
                    placeholder="Min"
                    value={ageRangeFilter.min}
                    onChange={(e) => filterByAgeRange(parseInt(e.target.value, 10), ageRangeFilter.max)}
                />
                <input
                    type="number"
                    placeholder="Max"
                    value={ageRangeFilter.max}
                    onChange={(e) => filterByAgeRange(ageRangeFilter.min, parseInt(e.target.value, 10))}
                />
            </div>

            <div className="lg:ml-60 mt-20 mb-10 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
                {
                    filteredProfiles.map(profile => <BiodataCard profile={profile} key={profile._id}></BiodataCard>)
                }
            </div>
        </div>
    );
};

export default Biodata;