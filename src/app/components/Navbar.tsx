import Link from "next/link"
export default function Navbar (){
    return(
        <header style={{backgroundColor:"blue" , color:"white", display:"flex", flexWrap:"wrap"}}>
            <nav>
                <ul className="flex flex-row">
                    <li >
                        <Link style={{color:"white"}} href="./">Home</Link>
                    </li> 
                    <li >
                        <Link style={{color:"white"}} href="/products/product1">Products</Link>
                    </li>
                    <li >
                        <Link style={{color:"white"}} href="/services/crypto">Services</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}