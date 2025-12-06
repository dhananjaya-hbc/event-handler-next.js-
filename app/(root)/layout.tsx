export const Layout = ({children}:{children: React.ReactNode}) => {
  return (
    <div>
        <h1>NavBar</h1>
        {children}
    </div>
  )
}

export default Layout