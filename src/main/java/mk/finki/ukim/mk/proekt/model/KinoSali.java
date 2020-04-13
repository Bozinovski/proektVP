package mk.finki.ukim.mk.proekt.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
@Data
public class KinoSali {
    @Id
    private Long id;

    private String imeNaSala;
    private int brSedista;

    public KinoSali() {
    }

    public KinoSali(String imeNaSala, int brSedista) {
        this.imeNaSala = imeNaSala;
        this.brSedista = brSedista;
    }


}