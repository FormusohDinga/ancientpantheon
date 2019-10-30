import Link from 'next/link'
import { withRouter } from 'next/router'
import { Nav, NavItem, NavLink } from 'reactstrap';


const Header = ({ router: { pathname } }) => (
    <div>
        <Nav>
            <NavLink>
                <Link prefetch href='/about'>
                    <a className={pathname === '/about' ? 'is-active' : ''}>About</a>
                </Link>
            </NavLink> <b/>
            <NavLink>
                <Link prefetch href='/'>
                    <a className={pathname === '/' ? 'is-active' : ''}>Home</a>
                </Link>
            </NavLink>
        </Nav>
    </div>
)

export default withRouter(Header)
