docker build -t frontciclo4 .



docker run -it -p 3000:3000 frontciclo4


revisar esto para el refresh 

const [editarObjetivo, { data: dataMutation, loading }] = useMutation(
    EDITAR_OBJETIVO,
    {
      refetchQueries: [{ query: PROYECTOS }],   // tiene que ser el query como esta definido en graphql
    }
  );

  revisar el repo de daniel
   https://github.com/Ciclo-4-Mision-TIC-UdeA
   https://github.com/danyel117
   https://www.youtube.com/channel/UCOPcF5YftHQaHjuTeEYwDuw/videos    prevalentWare