interface IAtaque {
    dameCapacidadAtaque(): number;
}

interface IDefensa {
    dameCapacidadDefensa(): number;
}

interface IArmadura {
    dameCapacidadArmadura(): number;
}

class Katana implements IAtaque {
    dameCapacidadAtaque(): number {
        return 40;
    }
}

class Shuriken implements IAtaque {
    dameCapacidadAtaque(): number {
        return 30;
    }
}

class Kunai implements IAtaque {
    dameCapacidadAtaque(): number {
        return 20;
    }
}

class Kama implements IAtaque {
    dameCapacidadAtaque(): number {
        return 30;
    }
}

class ArmaduraCobre implements IDefensa {
    dameCapacidadDefensa(): number {
        return 10;
    }
}

class ArmaduraBronce implements IDefensa {
    dameCapacidadDefensa(): number {
        return 20;
    }
}

class ArmaduraHierro implements IDefensa {
    dameCapacidadDefensa(): number {
        return 30;
    }
}

class ArmaduraAcero implements IDefensa {
    dameCapacidadDefensa(): number {
        return 40;
    }
}

enum GradosExperiencia {
    genin,
    chunin,
    jonin,
    kage
};

class Ninja {
    ataque: IAtaque;
    defensa: IDefensa;
    constructor(ataque: IAtaque, defensa: IDefensa) {
        this.ataque = ataque;
        this.defensa = defensa;
    }
}

class NinjaFactory {
    dameNinja(GradoExperiencia: GradosExperiencia): Ninja {
        switch (GradoExperiencia) {
            case GradosExperiencia.genin: return new Ninja(new Katana(), new ArmaduraBronce());
            case GradosExperiencia.chunin: return new Ninja(new Shuriken(), new ArmaduraBronce());
            case GradosExperiencia.jonin: return new Ninja(new Kunai(), new ArmaduraHierro());
            case GradosExperiencia.kage: return new Ninja(new Kama(), new ArmaduraAcero());
            default: return new Ninja(new Katana(), new ArmaduraCobre());
        }
    }
}

let ninja_jacinto = new NinjaFactory().dameNinja(GradosExperiencia.chunin);
let ninja_mercedes = new NinjaFactory().dameNinja(GradosExperiencia.genin);
let ninja_ana = new NinjaFactory().dameNinja(GradosExperiencia.jonin);
let ninja_guillermo = new NinjaFactory().dameNinja(GradosExperiencia.kage);