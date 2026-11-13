// DRAFTS — the owner can edit these articles freely.
// Both are grounded in his real work (Maze Explorer, Fiverr annotation).
// Nothing here claims results that were not measured.

export type Article = {
  slug: string;
  title: string;
  deck: string;
  category: string;
  date: string;
  readTime: string;
  status: 'Published' | 'Draft';
  projectSlugs: string[];
  sections: { heading: string; paragraphs: string[] }[];
  references: { label: string; href: string }[];
};

export const articles: Article[] = [
  {
    slug: 'dfs-vs-bfs-building-a-maze',
    title: 'DFS vs BFS, learned by building a maze',
    deck: 'One generates the maze, the other escapes it. Building a game taught me what the textbook definitions never did.',
    category: 'Algorithms',
    date: '2026-11-13',
    readTime: '5 min read',
    status: 'Published',
    projectSlugs: ['maze-explorer'],
    sections: [
      {
        heading: 'Two searches, two jobs',
        paragraphs: [
          'Depth-first search explores deep before it explores wide. That makes it a natural maze generator: pick a direction, keep going until you hit a wall, backtrack, and try again. The maze it carves feels organic because the search itself wanders.',
          'Breadth-first search does the opposite. It expands level by level, so the first time it reaches the exit it has found the shortest path. In Maze Explorer, DFS builds the problem and BFS solves it — two searches, two jobs, one game.',
        ],
      },
      {
        heading: 'Watching it run changes everything',
        paragraphs: [
          'The textbook definitions are correct, but they are static. Real-time rendering makes the difference visible: DFS wanders down corridors and backtracks; BFS floods outward like water filling the maze. Once you have watched both, you do not need to memorise which is which.',
          'That is the real lesson of the project. An algorithm is not a paragraph to remember — it is a behaviour to observe. Building something you can watch is the fastest way to understand it.',
        ],
      },
      {
        heading: 'What I would do differently',
        paragraphs: [
          'The first version mixed generation, solving and rendering together. Next time I would separate generation from solving cleanly, and keep the leaderboard logic out of the renderer. The game works, but the architecture could be tidier — and tidier code is easier to explain, which matters when the whole point is teaching.',
        ],
      },
    ],
    references: [
      {
        label: 'Maze Explorer — DSA project folder on GitHub',
        href: 'https://github.com/Wasif-2005-Ali/University/tree/main/Presentation_Projects/3rd%20Semester/DSA',
      },
    ],
  },
  {
    slug: 'what-good-training-data-takes',
    title: 'What good training data actually takes',
    deck: 'Annotation looks like drawing boxes. The real work is consistency: the same rule, applied the same way, a thousand times.',
    category: 'Data Annotation',
    date: '2026-11-13',
    readTime: '4 min read',
    status: 'Published',
    projectSlugs: [],
    sections: [
      {
        heading: 'The box is the easy part',
        paragraphs: [
          'Bounding box, polygon, polyline, keypoint: the tools take an afternoon to learn. Judgement takes longer. Where exactly does the object end? Is a half-hidden wheel part of the car? Every dataset has edge cases, and every edge case is a decision.',
          'Two years of freelance annotation taught me that the drawing is the smallest part of the job. The decisions around it — what counts, what does not, what to do when the rule is unclear — are the work.',
        ],
      },
      {
        heading: 'Consistency is the product',
        paragraphs: [
          'An ML team can work with any consistent rule, but not with five different ones. If the same object is labelled three ways across a dataset, the model learns noise. That is why edge cases need written rules, not memory: a short guideline, agreed before labelling starts, beats a thousand careful guesses.',
          'Consistency also means honesty about limits. Some images are ambiguous, and labelling them confidently anyway does not help anyone. Flagging them is part of the job.',
        ],
      },
      {
        heading: 'Check your own work',
        paragraphs: [
          'Before delivery, I review my own labels with fresh eyes and against the written rules — a second pass that catches drift, the slow slide where the rule you apply on image 900 is not quite the rule you applied on image 10. Clear acceptance criteria, agreed upfront, make that review possible.',
        ],
      },
    ],
    references: [
      {
        label: 'Data annotation services on Fiverr (@wasif_annotator)',
        href: 'https://www.fiverr.com/wasif_annotator',
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
