export interface Artist {
  name: string;
  lifespan: string;
  information: string;
  image: string;
  id: string;
}

export const vincentVanGogh: Artist = {
  name: "Vincent van Gogh",
  lifespan: "Mar 30, 1853 - Jul 29, 1890",
  information: "Vincent Willem van Gogh was a Dutch Post-Impressionist painter who posthumously became one of the most famous and influential figures in Western art history. In a decade, he created about 2,100 artworks, including around 860 oil paintings, most of which date from the last two years of his life. They include landscapes, still lifes, portraits and self-portraits, and are characterised by bold colours and dramatic, impulsive and expressive brushwork that contributed to the foundations of modern art. Not commercially successful, he struggled with severe depression and poverty, eventually leading to his suicide at age thirty-seven.\n" +
    "Born into an upper-middle-class family, Van Gogh drew as a child and was serious, quiet, and thoughtful. As a young man, he worked as an art dealer, often traveling, but became depressed after he was transferred to London. He turned to religion and spent time as a Protestant missionary in southern Belgium. He drifted in ill health and solitude before taking up painting in 1881, having moved back home with his parents. His younger brother Theo supported him financially, and the two kept a long correspondence by letter.",
  image: "banner_van-gogh.webp",
  id: "artist-1"
}

export const claudeMonet: Artist = {
  name: "Claude Monet",
  lifespan: "Nov 14, 1840 - Dec 5, 1926",
  information: "Oscar-Claude Monet was a French painter and founder of impressionist painting who is seen as a key precursor to modernism, especially in his attempts to paint nature as he perceived it. During his long career, he was the most consistent and prolific practitioner of impressionism's philosophy of expressing one's perceptions before nature, especially as applied to plein air landscape painting. The term \"Impressionism\" is derived from the title of his painting Impression, soleil levant, exhibited in the 1874 Salon des Refusés initiated by Monet and his associates as an alternative to the Salon.\n" +
    "Monet was raised in Le Havre, Normandy, and became interested in the outdoors and drawing from an early age. Although his mother, Louise-Justine Aubrée Monet, supported his ambitions to be a painter, his father, Claude-Adolphe, disapproved and wanted him to pursue a career in business. He was very close to his mother, but she died in January 1857 when he was sixteen years old, and he was sent to live with his childless, widowed but wealthy aunt, Marie-Jeanne Lecadre.\n",
  image: "banner_claude-monet.webp",
  id: "artist-2"
}

export const johannesVermeer: Artist = {
  name: "Johannes Vermeer",
  lifespan: "October 1632 - December 1675",
  information: "Johannes Vermeer was a Dutch Baroque Period painter who specialized in domestic interior scenes of middle-class life. During his lifetime, he was a moderately successful provincial genre painter, recognized in Delft and The Hague. Nonetheless, he produced relatively few paintings and evidently was not wealthy, leaving his wife and children in debt at his death.\n" +
    "Vermeer worked slowly and with great care, and frequently used very expensive pigments. He is particularly renowned for his masterly treatment and use of light in his work.\n" +
    "\"Almost all his paintings\", Hans Koningsberger wrote, \"are apparently set in two smallish rooms in his house in Delft; they show the same furniture and decorations in various arrangements and they often portray the same people, mostly women.\"\n" +
    "His modest celebrity gave way to obscurity after his death. He was barely mentioned in Arnold Houbraken's major source book on 17th-century Dutch painting and was thus omitted from subsequent surveys of Dutch art for nearly two centuries.\n",
  image: "banner_vermeer.webp",
  id: "artist-3"
}

export const artists = [vincentVanGogh, claudeMonet, johannesVermeer];
