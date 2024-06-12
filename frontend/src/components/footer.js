import React from 'react'

export default function Footer(props) {
  return (
    <footer className="text-center" style={{backgroundColor : props.backgroundColor}}>
    <p className="footer-text">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/chingu-voyages/v49-tier1-team-01"
      > <img style={{width: "6vw", height: "6vw"}} src="../github-mark.png"/>
      </a>
      </p>
    </footer>
  )
}
