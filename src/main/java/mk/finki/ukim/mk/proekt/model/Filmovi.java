package mk.finki.ukim.mk.proekt.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class Filmovi {

    @Id
    private Long id;

    private String imeNaFilm;
    private String vremetraenje;
    private String zanr;

    public Filmovi(){};

    public Filmovi(String imeNaFilm, String vremetraenje, String zanr) {
        this.imeNaFilm = imeNaFilm;
        this.vremetraenje = vremetraenje;
        this.zanr = zanr;
    }
    

}
