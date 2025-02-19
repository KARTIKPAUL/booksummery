import { useParams, useNavigate } from "react-router-dom";
import { selfHelpBooks } from "../data/selfHelpBooks";
import { businessBooks } from "../data/businessBooks";
import { fictionBooks } from "../data/fictionsBooks";
import { technologyBooks } from "../data/technologyBooks";
import { scienceBooks } from "../data/scienceBooks";
import { historyBooks } from "../data/historyBooks";
import { healthBooks } from "../data/healthBooks";
import { biographyBooks } from "../data/biographyBooks";
import { mysteryBooks } from "../data/mysteryBooks";

const categories = {
   "self-help": selfHelpBooks,
   "business": businessBooks,
   "fiction": fictionBooks,
   "technology": technologyBooks,
   "science": scienceBooks,
   "history":historyBooks,
   "health": healthBooks,
   "biography": biographyBooks,
   "mystery": mysteryBooks


};

const BookDetail = () => {
  const { category, id } = useParams();
  const navigate = useNavigate();

  console.log(category, id);

  // Get the correct book dataset based on the category from the URL
  const bookList = categories[category] || [];

  const book = bookList.find((book) => String(book.id) === id);

  if (!book) return <div>Book not found</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 sm:px-10 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10 border-b pb-6">
          <h1 className="text-3xl font-bold text-gray-900">{book.title}</h1>
          <p className="text-lg text-gray-600">by {book.author}</p>
        </header>

        <article className="bg-white rounded-lg shadow-md p-8">
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Overview</h2>
            <p className="text-gray-700">{book.summary}</p>
          </section>

          <section className="mb-6 border-t pt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Contents</h2>
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: book.fullContent }}
            />
          </section>

          <section className="mt-8 border-t pt-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Additional Information
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Published: {book.publishedDate || "Unknown"}</li>
              <li>Genre: {book.genre || "Not specified"}</li>
              <li>ISBN: {book.isbn || "N/A"}</li>
            </ul>
          </section>
        </article>

        <footer className="mt-10 text-center">
          <button
            onClick={() => navigate(-1)}
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← Back to Previous Page
          </button>
        </footer>
      </div>
    </div>
  );
};

export default BookDetail;
