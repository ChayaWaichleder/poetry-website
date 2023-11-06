const poems = [
  {
    id: 1,
    title: "מה הזמן",
    content: "מִי אָמַר\n שֶׁהֶעָתִיד הוּא מָחָר?\n וְהַהוֹוֶה הוּא עַכְשָׁו?\n מִי אָמַר?\n שֶׁהָאֶתְמוֹל הוּא עָבַר?\n מִי אָמַר?\n אוּלַי הָרֶגַע הַבָּא\n הוּא עָתִיד\n וְהַהוֹוֶה נִשְׁאַר\n לְתָמִיד?\n מָתַי הוּא נִגְמַר,\n הַהוֹוֶה\n וְהוֹפֵךְ לֶעָבָר?\n \n מָתַי מַתְחִיל הֶעָתִיד\n וְנִגְמַר הַהוֹוֶה\n אוּלַי בְּרֶגַע הַזֶּה\n זֶה קוֹרֶה?\n\n\n וְאִם בִּכְלָל\n הַזְּמַן הוּא מֻגְדָּר,\n תַּגִּידוּ אַתֶּם\n מָה נִשְׁאַר."
  },
  {
    id: 2,
    title: "וכשעברו",
    content: "וּכְשֶׁעָבְרוּ עָלַי\nגַּלֶּיךָ\nוְגַם מִשְׁבָּרֶיךָ\nעָבַרְתִּי\n\nבָּאוּ אֵלַי\nכָּל הָרְגָעִים\nשֶׁאָחַזְתָּ בִּי\nוְלֹא נָפַלְתִּי\nמִתְּהוֹם\nאֶל תְּהוֹם\nגָּבַרְתִּי\n\nנִשְׁאַרְתִּי\nלֹא נִשְׁבַּרְתִּי\n\nוְהִנֵּה,\nאֲנִי כָּאן\nאוֹמֶרֶת לְךָ\nמוּל כָּל\nהַחֲסָדִים-\n\nקָטֹנְתִּי\nבּוֹרְאִי,\nוְזוֹ הָאֱמֶת",
  },
  {
    id: 3,
    title: "אלול",
    content: "מָה זֶה אֱלוּל בִּשְׁבִילְךָ?\n \nמָה שֶׁהָיָה\n \nאוֹ מָה שֶׁיִּהְיֶה\n זֶה מְשַׁנֶּה?\n הָעִקָּר\n מָה שֶׁעָבַר\n מָה שֶׁעוֹבֵר\n וּמָה שֶׁאַתְּ עוֹשָׂה\n עַכְשָׁו\n תִּסְתַּכְּלִי בַּמַּרְאָה\n אֵיךְ אַתְּ נִרְאֵית\n אוּלַי קְצָת שׁוֹנָה\n בְּכָל זֹאת\n עָבְרָה שָׁנָה"
  },
  {
    id: 4,
    title: "אולי",
    content: "אַתֶּם\n כָּל הַיּוֹם\n מְתַכְנְנִים\n תָּכְנִיּוֹת\n חוֹגְגִים\n יוֹצְאִים לִקְנִיּוֹת\n הוֹלְכִים\n חוֹזְרִים\n נָחִים-\n בְּשָׁעוֹת פְּנוּיוֹת\n רָצִים\n עִם נַגָּן\n וְאָזְנִיּוֹת\n מְבַלִּים\n אוֹכְלִים\n בַּחֲנוּיוֹת\n יוֹשְׁבִים\n בַּחֲתֻנּוֹת\n מַשְׁוִים\n מְחִירֵי מוֹנִיּוֹת\n\n לָכֵן,\n יֵשׁ לִי חֲלוֹם\n אוּלַי\n פַּעַם אַחַת\n תָּבוֹאוּ\n אֵלַי\n תַּגִּידוּ שָׁלוֹם"
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
