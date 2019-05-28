import React from 'react'

const Layout = props => (
  <div id='layout_container'>
    <section id='color_bar' style={{height: 12, background: '#1f8dd6'}}></section>
    <section id='container' >
      <div className='pure-g'>
        <div className='pure-u-1-3'></div>
        <div className='pure-u-1-3'>

          <header id='header'>
            <h1>Bart Schedule By Station</h1>
          </header>
          { props.children }

        </div>
        <div className='pure-u-1-3'></div>
      </div>
    </section>
  </div>
)

export default Layout
