import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  home: {
    paddingTop: '100px',
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div id="home" className={classes.home}>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor
        tristique tristique. Aliquam molestie bibendum lorem, sed scelerisque
        diam pulvinar at. Aenean eget ex augue. Proin commodo nec justo et
        interdum. Suspendisse id semper est. Mauris egestas nisl velit, quis
        blandit eros elementum vitae. Pellentesque vitae felis porttitor,
        viverra mauris sit amet, tristique nunc. Aenean ut ante eu arcu
        pellentesque posuere id eget nunc. Pellentesque felis eros, maximus non
        tortor vel, mattis laoreet est. Nullam mollis, purus sit amet efficitur
        rhoncus, elit ante egestas sapien, sit amet commodo erat massa vel leo.
        Proin facilisis turpis quis sem aliquet interdum ut vel elit. Fusce
        metus velit, molestie vel tellus non, sollicitudin tempor tortor. Nullam
        molestie enim elit, ac rhoncus nisl molestie sed. Sed hendrerit molestie
        nisl, vel hendrerit urna consectetur sodales. Ut tellus mi, tincidunt id
        massa vitae, aliquet gravida sem. Suspendisse venenatis pulvinar diam,
        in maximus tortor feugiat vel. Maecenas non turpis non quam tempor
        fringilla a at erat. Fusce fermentum mauris velit, sit amet lacinia
        velit volutpat quis. Etiam venenatis ultrices tortor, eu scelerisque
        tellus sagittis ut. Praesent rutrum dolor sed porta pretium. In leo
        massa, commodo id nulla vitae, porta posuere ante. Aliquam ut metus a
        leo placerat malesuada. Aenean magna augue, interdum eu malesuada sit
        amet, fermentum in massa. Aliquam suscipit lectus velit. Duis tortor
        tortor, bibendum a dolor nec, dapibus porttitor mi. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. In at aliquam augue. Curabitur
        pulvinar rutrum tristique. Quisque sodales, orci quis dignissim congue,
        tellus lectus varius tellus, sed finibus mauris ipsum et arcu. Nam
        pellentesque consequat malesuada. Quisque eget quam hendrerit nisl
        dictum vulputate in non orci. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Donec dignissim
        nunc quam, vitae laoreet erat aliquam ac. Phasellus viverra risus mi, ac
        tincidunt arcu aliquet eu. Morbi eu dui non enim pellentesque iaculis
        eget ac metus. Integer sodales molestie malesuada. Fusce et ipsum eu
        urna lacinia facilisis nec et diam. Integer rhoncus egestas libero, ac
        maximus ligula elementum quis. Fusce a faucibus lacus. Morbi lacus
        tortor, ornare at sodales nec, tempus in odio. Donec velit metus,
        interdum eget eleifend et, tristique in arcu. Maecenas finibus lectus
        quam, non dictum leo accumsan sed. Aenean eu tincidunt sapien. Nulla nec
        lacus nec urna condimentum consequat. Nam placerat libero vitae
        convallis dictum. Cras blandit, lorem sed congue egestas, justo lacus
        consectetur dolor, in tincidunt neque quam ut nulla. Phasellus ut mi in
        massa pretium porttitor. Fusce cursus justo ac volutpat euismod. Aliquam
        pretium turpis a semper volutpat. Donec lacus nisl, sagittis eu varius
        sed, hendrerit id neque. Donec lobortis sagittis turpis id scelerisque.
        Aenean a lectus vel mi molestie tristique id eu tellus. Nam vel turpis
        mauris. Proin eu justo nunc. Duis euismod, erat vel interdum commodo,
        justo risus porta ex, quis euismod leo turpis a libero. Mauris dictum
        risus lacus, nec viverra nisl finibus ac. Vivamus in orci facilisis,
        condimentum turpis et, malesuada massa. Morbi in ligula sodales, auctor
        leo sit amet, finibus mi. Ut pulvinar massa id sapien mattis, in
        imperdiet dui suscipit. Sed sed ipsum quis diam convallis porttitor at
        ac magna. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Quisque egestas, nisl ac malesuada
        tempus, eros est ornare justo, quis dapibus est lorem sit amet metus.
        Duis tincidunt nunc ut ullamcorper blandit. Maecenas quis urna dapibus,
        convallis nulla id, commodo erat. Morbi tincidunt hendrerit
        pellentesque. In viverra quam eget pulvinar dapibus. Suspendisse
        malesuada, mi non fermentum ornare, ipsum odio elementum dolor, eu
        feugiat eros lectus vel massa. Cras non suscipit justo. Nam in imperdiet
        nulla. Proin pulvinar volutpat consectetur. Curabitur at pulvinar sem,
        eu aliquam massa. Quisque in porttitor ligula. Vivamus non nisl eget
        felis rhoncus aliquet. Fusce porta in tortor ac cursus. Fusce dignissim
        vulputate pulvinar. Donec imperdiet bibendum velit, vitae lobortis
        libero malesuada at. Sed accumsan augue enim, a rutrum erat euismod ac.
        Vestibulum finibus risus placerat egestas ultricies. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Integer eleifend, mi quis accumsan condimentum, velit turpis consectetur
        lectus, vel eleifend mauris tortor ut leo. Phasellus eget massa varius,
        vehicula diam a, sodales orci. Morbi quam ante, aliquet ut efficitur
        non, mattis tincidunt tellus. Aenean a auctor velit. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Nulla bibendum convallis vehicula. Nullam non gravida ipsum. In
        fringilla eros lacus, vitae mollis quam fringilla at. Ut at sem blandit,
        cursus augue viverra, faucibus nisi. Proin a ipsum et augue scelerisque
        consectetur.
      </p>
    </div>
  );
};

export default Home;
