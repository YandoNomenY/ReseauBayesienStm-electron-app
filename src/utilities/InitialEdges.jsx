export const InitialEdges = [
    {
    // --------------------- NOEUD VERS (OBTENIR DIPLOME..)
        id: 'n2-n1',
        source: 'n2',
        target: 'n1',
        sourceHandle: 'bottom',
        targetHandle: 'top',
    },
    // --------------------- NOEUD VERS (valider soutenance)
    {
        id: 'n3-n2',
        source: 'n3',
        target: 'n2',
        sourceHandle: 'bottom',
        targetHandle: 'top',
    },
    {
        id: 'n4-n2',
        source: 'n4',
        target: 'n2',
        sourceHandle: 'bottom',
        targetHandle: 'top',
    },
    {
        id: 'n5-n2',
        source: 'n5',
        target: 'n2',
        sourceHandle: 'bottom',
        targetHandle: 'top',
    },
    // ---------------------------------- NOEUDS VERS (valider 60/60 crédits)
    {
        id: 'n6-n5',
        source: 'n6',
        target: 'n5',
        sourceHandle: 'left',
        targetHandle: 'right',
    },
    {
        id: 'n7-n5',
        source: 'n7',
        target: 'n5',
        sourceHandle: 'left',
        targetHandle: 'right',
    },
    {
        id: 'n8-n5',
        source: 'n8',
        target: 'n5',
        sourceHandle: 'left',
        targetHandle: 'right',
    },
    // ----------------------- NOEUD VERS (valider UE-..)
    {
        id: 'n9-n8',
        source: 'n9',
        target: 'n8',
        sourceHandle: 'left',
        targetHandle: 'right',
    },
    {
        id: 'n10-n7',
        source: 'n10',
        target: 'n7',
        sourceHandle: 'left',
        targetHandle: 'right',
    },
    {
        id: 'n11-n6',
        source: 'n11',
        target: 'n6',
        sourceHandle: 'left',
        targetHandle: 'right',
    },
    {
        id: 'n12-n9',
        source: 'n12',
        target: 'n9',
        sourceHandle: 'left',
        targetHandle: 'right',
    },
    {
        id: 'n13-n10',
        source: 'n13',
        target: 'n10',
        sourceHandle: 'left',
        targetHandle: 'right',
    },
    {
        id: 'n14-n11',
        source: 'n14',
        target: 'n11',
        sourceHandle: 'left',
        targetHandle: 'right',
    },
    // NOEUDS VERS (Assurer la présentation)
    {
        id: 'n15-n3',
        source: 'n15',
        target: 'n3',
        sourceHandle: 'right',
        targetHandle: 'left',
    },
    {
        id: 'n16-n3',
        source: 'n16',
        target: 'n3',
        sourceHandle: 'right',
        targetHandle: 'left',
    },
    {
        id: 'n17-n3',
        source: 'n17',
        target: 'n3',
        sourceHandle: 'right',
        targetHandle: 'left',
    },
    {
        id: 'n18-n3',
        source: 'n18',
        target: 'n3',
        sourceHandle: 'right',
        targetHandle: 'left',
    },
    // NOEUD VERS (Valider livre de memoire)
    {
        id: 'n19-n4',
        source: 'n19',
        target: 'n4',
        sourceHandle: 'right',
        targetHandle: 'top',
    },
    {
        id: 'n20-n4',
        source: 'n20',
        target: 'n4',
        sourceHandle: 'left',
        targetHandle: 'top',
    },
    // NOEUD VERS (Rédiger et corriger..)
    {
        id: 'n21-n9',
        source: 'n21',
        target: 'n19',
        sourceHandle: 'bottom',
        targetHandle: 'top',
    },
    // NOEUD VERS (Faire un stage)
    {
        id: 'n22-n20',
        source: 'n22',
        target: 'n20',
        sourceHandle: 'bottom',
        targetHandle: 'top',
    },
  ]

