// Atomic Finds — fake furniture catalog (UI-kit only).
// Pieces are represented by a solid swatch color + title text (no real
// product photography was supplied) — swap for photography when it arrives.
window.STORE_DATA = {
  pieces: [
    { id:'p1', title:'Papasan Lounge Chair', maker:'Ficks Reed', year:1968, collection:'Island Line', price:420, condition:'Excellent', swatch:'var(--rust-500)', ink:'var(--cream-50)', rooms:['Living','Lounge'], drop:true },
    { id:'p2', title:'Cane Bentwood Rocker', maker:'Franco Albini', year:1972, collection:'Studio Cane', price:585, condition:'Good', swatch:'var(--ink-900)', ink:'var(--yellow-400)', rooms:['Living'] },
    { id:'p3', title:'Woven Peacock Chair', maker:'Unmarked', year:1965, collection:'Manila Craft', price:710, condition:'Excellent', swatch:'var(--teal-500)', ink:'var(--cream-50)', rooms:['Lounge'], drop:true },
    { id:'p4', title:'Bamboo Bar Cart', maker:'Ficks Reed', year:1970, collection:'Island Line', price:340, condition:'Good', swatch:'var(--yellow-400)', ink:'var(--ink-900)', rooms:['Dining'] },
    { id:'p5', title:'Rattan Console Table', maker:'McGuire', year:1974, collection:'San Francisco Studio', price:495, condition:'Fair', swatch:'var(--cherry-500)', ink:'var(--cream-50)', rooms:['Living'] },
    { id:'p6', title:'Cane Daybed', maker:'Unmarked', year:1969, collection:'Manila Craft', price:890, condition:'Excellent', swatch:'var(--cream-300)', ink:'var(--ink-900)', rooms:['Lounge','Outdoor'] },
    { id:'p7', title:'Wicker Étagère', maker:'Danny Ho Fong', year:1971, collection:'Tropi-Cal', price:460, condition:'Good', swatch:'var(--umber-600)', ink:'var(--cream-50)', rooms:['Living'] },
    { id:'p8', title:'Woven Dining Chair, Set of 4', maker:'Ficks Reed', year:1967, collection:'Island Line', price:920, condition:'Good', swatch:'var(--rust-600)', ink:'var(--cream-50)', rooms:['Dining'], drop:true },
  ],
  rooms:['All','Living','Dining','Lounge','Outdoor'],
};
