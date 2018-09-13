/**
 * @fileOverview  App-level controller code
 * @author Gerd Wagner
 */
// main namespace and subnamespace definitions
var pl = {
    m: {},
    v: { quizzes:{}, questions:{}},
    c: { quizzes:{}, questions:{}}
};
pl.c.app = {
  name: "MakeAQuiz",
  validateOnInput: false,
  initialize: function() {
    var storageAdapter = {dbName: pl.c.app.name};  // the DB name is set to the app name
    if (!('indexedDB' in window)) {
      console.log("This browser doesn't support IndexedDB. Falling back to LocalStorage.");
      storageAdapter.name = "LocalStorage";
    } else {
      storageAdapter.name = "IndexedDB";
    }
    pl.c.storageManager = new sTORAGEmANAGER( storageAdapter);
   pl.c.storageManager.createEmptyDb([Question]).then( pl.c.quizzes.manage.initialize);
  },
  createTestData: function () {
     var   answers_text3 = new TextItem({ id: 3, language: IsoLanguageCodeEL.codeList["DE"], text: "von"}),
        answers_text5 =  new TextItem({ id: 5, language: IsoLanguageCodeEL.codeList["DE"], text: "über"}),
        answerOptions = [ new AnswerOption({ answerTextItem: answers_text3, isCorrect: true}),
        new AnswerOption({ answerTextItem: answers_text5, isCorrect: false})],
        questions_text1 = new TextItem({ id: 1, language: IsoLanguageCodeEL.codeList["DE"], text: "Ob wir fahren, hängt ___ dem Wetter ab."}),
        question1 = new Question({id:1, type: QuestionTypeEL.labels[0], questionTextItem: questions_text1, hasManyCorrectAnswers:false, answerOptions: answerOptions});
        pl.c.storageManager.add(Question, question1);

        answers_text4 =new TextItem({ id: 4, language: IsoLanguageCodeEL.codeList["DE"], text: "auf"}),
        answerOption2 = [ new AnswerOption({ answerTextItem: answers_text2, isCorrect: false}),
        new AnswerOption({ answerTextItem: answers_text4, isCorrect: true})],
        questions_text2 = new TextItem({ id: 2, language: IsoLanguageCodeEL.codeList["DE"], text: "Bitte achte ___ den neuen Mantel."}),
        question2 = new Question({id:6, type: QuestionTypeEL.labels[0], questionTextItem: questions_text2, hasManyCorrectAnswers:false, answerOptions: answerOption2}),
        pl.c.storageManager.add(Question, question2);

        answers_text1 = new TextItem({ id: 1, language: IsoLanguageCodeEL.codeList["DE"], text: "mit"}),
        answers_text9 = new TextItem({ id: 9, language: IsoLanguageCodeEL.codeList["DE"], text: "bei"}),
        answerOption3 = [ new AnswerOption({ answerTextItem: answers_text9, isCorrect: false}),
        new AnswerOption({ answerTextItem: answers_text1, isCorrect: true})],
        questions_text3 = new TextItem({ id: 3, language: IsoLanguageCodeEL.codeList["DE"], text: "Ich fange ___ der Übung an."}),
        question3 = new Question({id:5, type: QuestionTypeEL.labels[0], questionTextItem: questions_text3, hasManyCorrectAnswers:false, answerOptions: answerOption3}),
        pl.c.storageManager.add(Question, question3);

        answers_text8 = new TextItem({ id: 8, language: IsoLanguageCodeEL.codeList["DE"], text: "an"}),
        answerOption4 = [ new AnswerOption({ answerTextItem: answers_text8, isCorrect: false}),
        new AnswerOption({ answerTextItem: answers_text4, isCorrect: true})],
        questions_text4 = new TextItem({ id: 4, language: IsoLanguageCodeEL.codeList["DE"], text: "Es kommt ___ den richtigen Preis an."}),
        question4 = new Question({id:4, type: QuestionTypeEL.labels[0], questionTextItem: questions_text4, hasManyCorrectAnswers:false, answerOptions: answerOption4}),
        pl.c.storageManager.add(Question, question4);

        answerOption5 = [ new AnswerOption({ answerTextItem: answers_text5, isCorrect: false}),
        new AnswerOption({ answerTextItem: answers_text4, isCorrect: true})],
        questions_text5 = new TextItem({ id: 5, language: IsoLanguageCodeEL.codeList["DE"], text: "Bitte antworten Sie heute ___ den Brief."}),
        question5 = new Question({id:3, type: QuestionTypeEL.labels[0], questionTextItem: questions_text5, hasManyCorrectAnswers:false, answerOptions: answerOption5}),
        pl.c.storageManager.add(Question, question5);

        answers_text10 = new TextItem({ id: 10, language: IsoLanguageCodeEL.codeList["DE"], text: "in"}),
        answerOption6 = [ new AnswerOption({ answerTextItem: answers_text5, isCorrect: true}),
        new AnswerOption({ answerTextItem: answers_text10, isCorrect: false})],
        questions_text6 = new TextItem({ id: 6, language: IsoLanguageCodeEL.codeList["DE"], text: "Wir ärgern uns ___ den Regen."}),
        question6 = new Question({id:2, type: QuestionTypeEL.labels[0], questionTextItem: questions_text6, hasManyCorrectAnswers:false, answerOptions: answerOption6}),
            pl.c.storageManager.add(Question, question6);


        answers_text7 = new TextItem({ id: 7, language: IsoLanguageCodeEL.codeList["DE"], text: "für"}),
        answerOption7 = [ new AnswerOption({ answerTextItem: answers_text1, isCorrect: true}),
        new AnswerOption({ answerTextItem: answers_text7, isCorrect: false})],
        questions_text7 = new TextItem({ id: 7, language: IsoLanguageCodeEL.codeList["DE"], text: "Hört um 17.00 Uhr ___ der Arbeit auf."}),
        question7 = new Question({id:7, type: QuestionTypeEL.labels[0], questionTextItem: questions_text7, hasManyCorrectAnswers:false, answerOptions: answerOption7}),
        pl.c.storageManager.add(Question, question7);


        answerOption8 = [ new AnswerOption({ answerTextItem: answers_text4, isCorrect: true}),
        new AnswerOption({ answerTextItem: answers_text5, isCorrect: true})],
        questions_text8 = new TextItem({ id: 8, language: IsoLanguageCodeEL.codeList["DE"], text: "Ein Babysitter passt ___ kleine Kinder auf."}),
        question8 = new Question({id:8, type: QuestionTypeEL.labels[0], questionTextItem: questions_text8, hasManyCorrectAnswers:false, answerOptions: answerOption8}),
        pl.c.storageManager.add(Question, question8);


        answerOption9 = [ new AnswerOption({ answerTextItem: answers_text5, isCorrect: true}),
        new AnswerOption({ answerTextItem: answers_text8, isCorrect: false})],
        questions_text9 = new TextItem({ id: 9, language: IsoLanguageCodeEL.codeList["DE"], text: "Deutsche regen sich ___ Unpünktlichkeit auf."}),
        question9 = new Question({id:9, type: QuestionTypeEL.labels[0], questionTextItem: questions_text9, hasManyCorrectAnswers:false, answerOptions: answerOption9}),
        pl.c.storageManager.add(Question, question9);

        answerOption10 = [ new AnswerOption({ answerTextItem: answers_text3, isCorrect: false}),
        new AnswerOption({ answerTextItem: answers_text7, isCorrect: true})],
        questions_text10 = new TextItem({ id: 10, language: IsoLanguageCodeEL.codeList["DE"], text: "Frauen geben viel Geld ___ Schuhe aus."}),
        question10 = new Question({id:10, type: QuestionTypeEL.labels[0], questionTextItem: questions_text10, hasManyCorrectAnswers:false, answerOptions: answerOption10});
        pl.c.storageManager.add(Question, question10);

        //answers_text2 = new TextItem({ id: 2, language: IsoLanguageCodeEL.codeList["DE"], text: "zu"}),
        //answers_text6 = new TextItem({ id: 6, language: IsoLanguageCodeEL.codeList["DE"], text: "um"}),
   //pl.c.storageManager.add(Question, [questions[0],questions[1],questions[2],questions[3],
     // questions[4],questions[5],questions[6],questions[7],questions[8],questions[9]]);

    pl.c.storageManager.add( Quiz, [
      {id: 1, titleTextItem: "Verbs with prepositions", questions:[question1,question2,question3,question4,
          question5,question6,question7,question8,question9,question10]}
      ]);
   
  },
  clearData: function () {

  }
};
