import desktopLight from "../assets/bg-desktop-light.jpg";

const Header: React.FC = () => {
    return (
        <header className="relative w-full h-[200px] bg-cover bg-center" style={{ backgroundImage: `url(${desktopLight})` }}>
            <div className="flex justify-between">
                <div className="pt-12 pl-6 text-light-gray text-m">T O  D O</div>
                <div className="mr-6 mt-12">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#FFF" fill-rule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/></svg>
                </div>
            </div>
        </header>
)
}

export default Header;