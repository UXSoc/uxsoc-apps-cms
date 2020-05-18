import React, { useState, useCallback } from 'react';
import Department from '../../../../components/Department'
import './style.css';

const DepartmentsSection = ({ departmentsSection }) => {
    const [tab, setTab] = useState(0);
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);
    const [state, setState] = useState(false);

    return (
        <div>
            <div className="dept-tabs-flow">
                <div className="dept-tabs">
                    {
                        departmentsSection.map((department, index) => <button
                            key={index}
                            className={tab === index ? "dept-tablinks active" : "dept-tablinks"}
                            onClick={() => {
                                setState(true)
                                setTab(index)
                            }}>{department.title}</button>)
                    }
                </div>
            </div>
            {
                departmentsSection.map((department, index) => {
                    if (state) {
                        forceUpdate();
                        setState(false);
                    }
                    if (tab === index) {
                        return <Department department={department} key={index} />
                    }
                })
            }
        </div >
    )
}

export default DepartmentsSection;