import Footer from "./Footer";
import Header from "./Header";

function Reading() {
    return (
      <div>
        <Header />
        <div className="bg-white p-8 rounded-lg shadow-md mt-10">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Advantages of Reading
          </h2>
          <div className="text-gray-700 leading-loose">
            <p>
              Reading offers numerous benefits, both for the mind and the soul.
              Here are some of the advantages of cultivating a reading habit:
            </p>
            <ul className="list-disc ml-6">
              <li>Broadens your knowledge and perspective.</li>
              <li>Improves vocabulary and language skills.</li>
              <li>Reduces stress and promotes relaxation.</li>
              <li>Enhances empathy and understanding of others.</li>
              <li>Boosts creativity and imagination.</li>
            </ul>
            <p className="mt-4">
              Whether you enjoy fiction, non-fiction, or poetry, reading can be
              a rewarding and enriching experience. Start your reading journey
              with BookStore today!
            </p>
          </div>
          <div className="mt-8 relative" style={{ paddingBottom: "56.25%" }}>
            <iframe
              title="Advantages of Reading"
              className="absolute top-0 left-0 w-full h-full"
              src="https://youtu.be/IJ0kurZy1DE?si=VeHJUZqwzX2pSYUD"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <Footer />
      </div>
    );
}

export default Reading;
