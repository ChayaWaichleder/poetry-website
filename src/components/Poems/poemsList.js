const poems = [
  {
    id: 1,
    title: "Poem Title 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    id: 2,
    title: "וכשעברו",
    content: "וּכְשֶׁעָבְרוּ עָלַי\nגַּלֶּיךָ\nוְגַם מִשְׁבָּרֶיךָ\nעָבַרְתִּי\n\nבָּאוּ אֵלַי\nכָּל הָרְגָעִים\nשֶׁאָחַזְתָּ בִּי\nוְלֹא נָפַלְתִּי\nמִתְּהוֹם\nאֶל תְּהוֹם\nגָּבַרְתִּי\n\nנִשְׁאַרְתִּי\nלֹא נִשְׁבַּרְתִּי\n\nוְהִנֵּה,\nאֲנִי כָּאן\nאוֹמֶרֶת לְךָ\nמוּל כָּל\nהַחֲסָדִים-\n\nקָטֹנְתִּי\nבּוֹרְאִי,\nוְזוֹ הָאֱמֶת",
  }
  // More poem objects
];

const getAllPoems = () => {
  return poems;
};

const getPoemById = (id) => {
  return poems.find(poem => poem.id === id);
};

export { poems, getAllPoems, getPoemById };
