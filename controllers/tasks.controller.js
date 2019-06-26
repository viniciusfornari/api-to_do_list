const get = function(req,res){
    const tasks = [
        {
            "title": "Amo a leticia paschoa da silva fornari ",
            "description": "menina legalzinha"
        },
        {
            "title":"hack da nasa ",
            "description": "Estudar plano de invasão software"
        }
    ];

        res.send(tasks);
}

const create = function(req,res){

}

const update = function(req,res){

}

const remove = function(req,res){

}

module.exports = { get , create , update , remove }