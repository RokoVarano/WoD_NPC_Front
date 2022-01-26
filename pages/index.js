import { Fragment } from "react";
import Link from "next/link";

const HomePage = () => {
    return (
        <Fragment>
        <h1>HomePage</h1>
        <ul>
            <li>
                <Link href='/news'>
                    News
                </Link>
            </li>
            <li>Another item</li>
        </ul>
    </Fragment>
    )
}

export default HomePage;