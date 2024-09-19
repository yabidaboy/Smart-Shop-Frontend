import React from 'react'
import Category from './Category'

function Categories() {
    const cats= [{link : "/women.jpeg",title : "women"},{link : "/men.jpeg",title : "men"},{link : "/kids.jpg",title : "kids"}]
    return (
        <div className='container py-3'>
            <h2 className='text-3xl font-bold text-center'>Choise Your Category</h2>
            <div className="grid grid-cols-3 gap-4 py-5">
                {
                    cats.map(el =>{
                        return <Category img={el.link} title={el.title}/>
                    })
                }
            </div>
        </div>
    )
}

export default Categories
