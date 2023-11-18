function NewsButton({ path }: { path: string }) {
  return (
    <a
      href={ path }
      target="_blank"
      rel="noreferrer"
      className="font-poppins font-bold opacity-90 bg-accent-green py-3 px-5
      shadow-xl drop-shadow-lg rounded-lg"
    >
      Leia a notícia aqui
    </a>
  );
}

export default NewsButton;
