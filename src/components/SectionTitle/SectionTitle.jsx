

const SectionTitle = ({ subheading, heading }) => {
    return (
        <div className="md:w-4/12 mx-auto">
            <p className="text-yellow-500 my-4">---{subheading}---</p>
            <h3 className="text-2xl font-bold border-y-4 py-2">{heading}</h3>
        </div>
    );
};

export default SectionTitle;