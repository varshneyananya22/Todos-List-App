import React from 'react'

const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "70vh",
    width: "100%",
    border: "2px solid gray"
  }

  return (
    <footer className='bg-dark text-light py-2' style={footerStyle}>
      <p className="text-center">
        Copyright &copy; MyTodosList.com
      </p>
    </footer>
  )
}

export default Footer
