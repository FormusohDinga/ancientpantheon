import Link from 'next/link'
import { withRouter } from 'next/router'
import { Nav, NavItem, NavLink } from 'reactstrap';


const Header = ({ router: { pathname } }) => (
    <div>
        <Nav>
            <NavItem>
                <Link prefetch href='/about'>
                    <a className={pathname === '/about' ? 'is-active' : ''}>About </a>
                </Link>
            </NavItem> <b/>
            <NavItem>
                <Link prefetch href='/'>
                    <a className={pathname === '/' ? 'is-active' : ''}>Home </a>
                </Link>
            </NavItem>
            <NavItem>
                <Link prefetch href='/resume'>
                    <a className={pathname === '/resume' ? 'is-active' : ''}>Resume </a>
                </Link>
            </NavItem>
        </Nav>
    </div>
)

export default withRouter(Header)
