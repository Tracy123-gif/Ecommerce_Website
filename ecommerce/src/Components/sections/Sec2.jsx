import React from 'react'
import {Tabs,  TabList, TabPanels, Tab, TabPanel} from '@chakra-ui/react'
import Men from '../sectionContent/Men'
import Women from '../sectionContent/Women'
import { Link } from 'react-router-dom'

function Sec2() {

    function DataTabs({data}) {

        return (
            <div className='px-20 py-20 text-center '>
                <h1 className='text-4xl font-medium'>Best sellers</h1>

                <Tabs className='my-20' align='center' colorScheme='pink'>
                    <TabList>
                        { data.map((tab, index) => (<Tab key={index}>{tab.label}</Tab>))}
                    </TabList>
                    <TabPanels className='flex justify-center w-full'>
                        {
                            data.map((tab, index) => (
                                <TabPanel  p={4} key={index}>
                                    {tab.content}
                                </TabPanel>
                            ))
                        }
                    </TabPanels>
                </Tabs>


                
            </div>
        )
    }

    // 2. Create an array of data
    const tabData = [
        {
            label: "Men's",
            content: <Men/>
        }, {
            label: "Women's",
            content:  <Women/>
        }
    ]

    // 3. Pass the props and chill!
    return (
        <div className='flex flex-col align-middle '>
            <DataTabs data={tabData}/>

            <button className='explore'><Link to={'/shop'}>Explore more</Link></button>
        </div>
    )
}
export default Sec2