// importar os arquivos
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// funcao criada para comprimir o css
function styles(){
    return gulp.src('./src/styles/*.scss') // pega todos arquivos .scss da pasta styles
        .pipe(sass({outputStyle: 'compressed'})) // commprime os arquivos
        .pipe(gulp.dest('./dist/css')); // adiciona em uma pasta nova dist/css
}

exports.default = styles; // funcao default
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles)); // adicionado o watcher para os arquivos de estilo
    // watcher é responsável por salvar e compilar direto sem ter que usar o npm run
}