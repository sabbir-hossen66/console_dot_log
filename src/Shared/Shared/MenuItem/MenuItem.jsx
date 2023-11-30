

const MenuItem = ({ item }) => {
    const { image, price, name, recipe } = item;
    return (
        <div className="flex space-x-4">
            <img style={{ borderRadius: '0 200px 250px 250px' }} className="w-[100px]" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}-----</h3>
                <p>{recipe}</p>
                <p className="text-yellow-500">${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;