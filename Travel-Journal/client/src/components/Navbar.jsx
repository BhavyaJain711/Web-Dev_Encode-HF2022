import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className='flex justify-around h-[8vh] bg-[#F55A5A] items-center text-2xl sticky'>
          <Link to='/'>
            <div className='flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" color='white'><path d="M12 22.7q-2.225 0-4.175-.85-1.95-.85-3.387-2.288Q3 18.125 2.15 16.175 1.3 14.225 1.3 12q0-2.225.85-4.175.85-1.95 2.288-3.387Q5.875 3 7.825 2.15 9.775 1.3 12 1.3q2.225 0 4.175.85 1.95.85 3.387 2.288Q21 5.875 21.85 7.825q.85 1.95.85 4.175 0 2.225-.85 4.175-.85 1.95-2.288 3.387Q18.125 21 16.175 21.85q-1.95.85-4.175.85Zm-1.05-2.2v-2.1q-.875 0-1.512-.638-.638-.637-.638-1.512V15.2l-5.15-5.15q-.075.475-.137.962-.063.488-.063.988 0 3.275 2.138 5.688Q7.725 20.1 10.95 20.5Zm7.35-2.75q.55-.575.975-1.25.425-.675.7-1.413.275-.737.425-1.525.15-.787.15-1.587 0-2.65-1.45-4.825-1.45-2.175-3.9-3.125v.45q0 .875-.638 1.512-.637.638-1.512.638h-2.1v2.15q0 .425-.312.737-.313.313-.738.313H7.7v2.15h6.45q.425 0 .738.312.312.313.312.738V16.3h1.1q.7 0 1.25.4t.75 1.05Z"/></svg>
                <p className='pl-2 text-white font-bold'>Travel Journal</p>
            </div>
          </Link>
            <Link to='/add'>
              <button className='bg-green-600 text-white text-xl w-[8vw] rounded font-mono'>Add Place</button>
            </Link>
        </nav>
    </div>
  )
}

export default Navbar