import Link from "next/link";
import "./SideBar.scss";
import {
	FaBoxes,
	FaChartLine,
	FaCalendarAlt,
	FaAngleRight, 
	FaMapSigns,
	FaMapMarkerAlt, 
	FaUmbrella, 
	FaDatabase, 
	FaCloudUploadAlt 
} from 'react-icons/fa';


function SideBar(): JSX.Element {
	return (
		<>
			<div className="container">
			    <div className="itemsLink">
					<Link href="/" className="link" >
						< FaBoxes/>
						<p>Meus talhões</p>
						<div className="iconArrow">
							<FaAngleRight />
						</div>
					</Link>
					<Link href="/" className="link linkSecondary">
						< FaCalendarAlt />
						<p>Safra XXXX</p>
						<div className="iconArrow">
							<FaAngleRight />
						</div>
					</Link>
					<hr className="line"></hr>
					<Link href="/" className="link">
						< FaChartLine />
						<p>Talhões</p>
					</Link>
					<Link href="/" className="link linkSecondary">
						< FaMapSigns />
						<p>Rotação de culturas</p>
					</Link>
					<Link href="/" className="link linkSecondary">
						< FaMapMarkerAlt />
						<p>Anotações</p>
					</Link>
					<Link href="/" className="link linkSecondary">
						< FaUmbrella />
						<p>Clima</p>
					</Link>
					<Link href="/" className="link linkSecondary">
						< FaDatabase />
						<p>Dados do campo</p>
					</Link>
					<Link href="/" className="link linkSecondary">
						< FaCloudUploadAlt />
						<p>Importar arquivos</p>
					</Link>
					
				</div>
			</div>
		</>
	)
}

export default SideBar;