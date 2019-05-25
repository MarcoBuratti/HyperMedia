
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('authors').del()
    .then(function () {
      // Inserts seed entries
      return knex('authors').insert([
        { id_author: 0, name: 'Andrea Calogero Camilleri', biography: "Originally from Porto Empedocle, Sicily, Camilleri began studies at the Faculty of Literature in 1944, without concluding them, meanwhile publishing poems and short stories. From 1948 to 1950 Camilleri studied stage and film direction at the Silvio D'Amico Academy of Dramatic Arts (Accademia Nazionale d'Arte Drammatica) and began to take on work as a director and screenwriter, directing especially plays by Pirandello and Beckett. His parents knew, and were, reportedly, ''distant friends'' of, Pirandello, as he tells in his essay on Pirandello Biography of the Changed Son. His most famous works, the Montalbano series, show many Pirandellian elements: for example, the wild olive tree that helps Montalbano think is on stage in his late work The Giants of the Mountain. In 1994 Camilleri published the first in a long series of novels: La forma dell'Acqua (The Shape of Water) featured the character of Inspector Montalbano, a fractious Sicilian detective in the police force of Vigàta, an imaginary Sicilian town. The series is written in Italian but with a substantial sprinkling of Sicilian phrases and grammar. The name Montalbano is a homage to the Spanish writer Manuel Vázquez Montalbán; the similarities between Montalban's Pepe Carvalho and Camilleri's fictional detective are noteworthy. Both writers make great play of their protagonists' gastronomic preferences." },
        { id_author: 1, name: 'J.K. Rowling', biography: "Rowling was born to Peter James Rowling, a Rolls-Royce aircraft engineer, and Anne Rowling (née Volant), a science technician, on 31 July 1965 in Yate, Gloucestershire, England, 10 miles (16 km) northeast of Bristol. Her parents first met on a train departing from King's Cross Station bound for Arbroath in 1964. They married on 14 March 1965. One of her maternal great-grandfathers, Dugald Campbell, was Scottish, born in Lamlash on the Isle of Arran. Her mother's paternal grandfather, Louis Volant, was French, and was awarded the Croix de Guerre for exceptional bravery in defending the village of Courcelles-le-Comte during the First World War. Rowling originally believed he had won the Légion d'honneur during the war, as she said when she received it herself in 2009. She later discovered the truth when featured in an episode of the UK genealogy series Who Do You Think You Are?, in which she found out it was a different Louis Volant who won the Legion of Honour. When she heard her grandfather's story of bravery and discovered the croix de guerre was for ''ordinary'' soldiers like her grandfather, who had been a waiter, she stated the croix de guerre was ''better'' to her than the Legion of Honour." },
        { id_author: 2, name: 'Emily Brontë', biography: 'CC nasce a CC e muore a CC' }
      ]);
    });
};

//Tolgo cogbome
//bio
//