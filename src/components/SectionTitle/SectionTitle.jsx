

const SectionTitle = ({ subheading, heading }) => {
    return (
        <div className="md:w-4/12 mx-auto text-center py-10 mt-4">
            <p className="text-yellow-500 my-2 text-2xl">---{subheading}---</p>
            <h3 className="text-3xl font-bold border-y-4 py-2">{heading}</h3>
        </div>
    );
};

export default SectionTitle;