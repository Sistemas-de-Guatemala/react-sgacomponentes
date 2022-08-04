import { v4 } from 'uuid';

/**
 * Esta clase controla los nombres de los componentes
 * para que no se repiten en toda la web
 */
class AControl{

    private lista_controles:string[] = [];

    public GenerarUuidControl(){
        let uuidValido:boolean = false;
        let contador:number = 0;
        let uuid:string = "";
        while(!uuidValido){
            uuid = v4();
            if(!this.lista_controles.includes(uuid)){
                uuidValido = true;
                this.lista_controles.push(uuid);
                break;
            }

            contador++;

            if(contador > 500){
                uuid = v4();
                break;
            }
        }

        return uuid;
    }
};

const aControl:AControl = new AControl();
export default aControl;