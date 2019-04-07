import { Activity } from './activity';
import { options } from '../options';
class ResultActivity extends Activity{

    constructor(stage){
        super(stage);
    }

    onInit(){
        super.onInit();
        this.setBackground();
    }

    createUI(){
        this.showScore();
    }

    showScore(){
        const scoreObject = new createjs.Text(`Total score: ${this.player.score}`, "30px 'Comic Sans'", "#ff7700");
        scoreObject.x = options.w / 4;
        scoreObject.y = options.h / 2;
        scoreObject.textBaseline = "alphabetic";
        this.interfaceContainer.addChild(scoreObject);
    }

}

export { ResultActivity };