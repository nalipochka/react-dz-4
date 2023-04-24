import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Home() {
    return (
        <div className="container">
            <header>
                <h1>Kryvyi Rih</h1>
                <nav>
                    <ul>
                        <li><Link to="/Top">Top</Link></li>
                        <li><Link to="/Gallery">Gallery</Link></li>
                    </ul>
                </nav>
            </header>
            <aside>
                <div className="image-with-text">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Kryvyi_Rih_Old_Town.jpg" alt="kryvyi_rih" width="300px"></img>
                        <p>Located on the banks of the Ingulets and Saksagan rivers, Kryvyi Rih was founded in 1775 by Cossacks. The military settlement
                            in 1860 was part of the Kherson province. The region began to grow at the turn of the 1880s. Urbanization of Kryvyi Rih was not
                            planned; French and English investments were attracted by the boom in metallurgy and the mining industry, the discovery of
                            rich deposits of iron ore. The construction of the Catherine railway to transport ore to the Donbas turned Kryvyi Rih into a large
                            city, which it received in 1919. In 1934, the first (Komsomolka blast furnace) Kryvyi Rih Metallurgical Plant (now ArcelorMittal Kryvyi Rih),
                            the most powerful of more than 500 enterprises in the region, was put into operation. Nowadays, the city is a
                            major industrial and cultural center of Ukraine.
                            </p>
                </div>
            </aside>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
}