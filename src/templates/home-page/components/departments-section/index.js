import React, { useState, useCallback } from 'react';
import Department from '../../../../components/Department'
import { TabContainer, DeptTabs, Button } from './styles'

const DepartmentsSection = ({ departmentsSection, primaryColor, secondaryColor, footerColor, defaultColor }) => {
    const [tab, setTab] = useState(0);
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);
    const [state, setState] = useState(false);


    const renderDepartment = () => {
        return departmentsSection.map((department, index) => {
            if (state) {
                forceUpdate();
                setState(false);
            }
            if (tab === index) {
                return <Department
                    department={department}
                    key={index}
                    defaultColor={defaultColor}
                    secondaryColor={secondaryColor}
                    footerColor={footerColor}
                    primaryColor={primaryColor} />
            }
        })
    }

    return (
        <div>
            <TabContainer>
                <DeptTabs primary={primaryColor}>
                    {
                        departmentsSection.map((department, index) => <Button
                            primary={primaryColor}
                            key={index}
                            className={tab === index ? "active" : ""}
                            onClick={() => {
                                setState(true)
                                setTab(index)
                            }}>{department.title}</Button>)
                    }
                </DeptTabs>
            </TabContainer>
            {
                renderDepartment()
            }
        </div >
    )
}

export default DepartmentsSection;