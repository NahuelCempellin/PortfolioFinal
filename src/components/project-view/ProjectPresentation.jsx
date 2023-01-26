import React, {useEffect, useState} from 'react'
import { Data } from './mocked-data'
import './project-view.css'

import{FaTasks} from 'react-icons/fa'
import {BsFillJournalBookmarkFill} from 'react-icons/bs'
import {MdScreenShare} from 'react-icons/md'

const ProjectPresentation = () => {
    const [data,setData]= useState([])


    useEffect(()=>{
        setData(Data)
    },[Data])

  return (
    <div className='project-view-container'>
         {
                    data.map((el,i)=> {
                        return (
                            <div className='project-box-all' key={i}>
                            <div className='box1'>
                                <div className='box1-inner'>
                                <div className='head'>
                                    <p className='date'>{el.date}</p>
                                    <div>
                                    <h3>Project name: {el.name}</h3>
                                    <p className='type'>Type: {el.projectType}</p>
                                    </div>
                                </div>

                                <div className='down-card'>
                                    {
                                        el.tasks ?
                                    <div className='item-box-pr'>
                                        <div>
                                            <FaTasks/>
                                        </div>
                                        
                                        <p>{el.tasks}</p>
                                    </div> 
                                    : null
                                    }

                                <div className='item-box-pr'>
                                    <div>
                                        <BsFillJournalBookmarkFill/>
                                    </div>
                               <p>{el.text}</p>
                                </div>  

                                <div className='item-box-pr'>
                                    <div>
                                        <MdScreenShare/>
                                    </div>
                               <a href={el.link} target='_blank'>Deploy: {el.link}</a>
                            </div>
                                {
                                    el.client.clientName?
                            <div className='item-box-pr'>
                               <p>Client: {el.client.clientName}</p>
                            </div>  
                                :null
                                }
                               </div>
                                </div>
                            </div>
                            <div className='box2'>Projects</div>
                        </div>)
                    })
                }
        
    </div>
  )
}

export default ProjectPresentation