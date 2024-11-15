
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogOutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className='p-4 flex flex-col'>
      <SearchInput />
      {/* <div className='divider px-3'></div> */}
      <Conversations />
      <LogOutButton />
    </div>
  )
}

export default Sidebar
