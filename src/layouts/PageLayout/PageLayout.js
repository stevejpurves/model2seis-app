import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className='container-fluid text-center'>
    <h1>model2seismic</h1>
    <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
    {' · '}
    <Link to='/forward' activeClassName='page-layout__nav-item--active'>Forward</Link>
    {' · '}
    <Link to='/reverse' activeClassName='page-layout__nav-item--active'>Reverse</Link>
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
