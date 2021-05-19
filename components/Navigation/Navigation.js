import requests from '../../utils/requests';
function Navigation() {
    return (
        <div className="flex">
            {
                Object.entries(requests).map(([key, {title, url}]) => (
                    <h2 key={key} className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500">{title}</h2>
                ))
            }
        </div>
    )
}

export default Navigation
