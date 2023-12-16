import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
  return (
    <div className='flex justify-center bg-fuchsia-300 '>
        <div className='text-white '>
            Github Followers: {data.followers}
            <img src={data.avatar_url} alt="git avatar" width={300} />
        </div>
    </div>
  )
}

export default Github

export const githubInfo = async () => {
    const response = await fetch('https://api.github.com/users/pradoshs0414')
    return response.json()
}