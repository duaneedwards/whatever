UNRAR = """
         .-=-==--==--.
   ..-=="  ,'o`)      `.
 ,'         `"'         \\
:  (                     `.__...._
|                  )    /         `-=-.
:       ,vv.-._   /    /               `---==-._
 \/\/\/VV ^ d88`;'    /                         `.
     ``  ^/d88P!'    /             ,              `._
        ^/    !'   ,.      ,      /                  "-,,__,,--'"'''-.
       ^/    !'  ,'  \\. .(      (         _           )  ) ) ) ))_,-.\\
      ^(__ ,!',"'   ;:+.:%:a.     \:.. . ,'          )  )  ) ) ,"'    '
      ',,,'','     /o:::":%:%a.    \:.:.:         .    )  ) _,'
       "''       ;':::'' `+%%%a._  \%:%|         ;.). _,-""
              ,-='_.-'      ``:%::)  )%:|        /:._,"
             (/(/"           ," ,'_,'%%%:       (_,'
                            (  (//(`.___;        \\
                             \\    \\   `         `
  UNRAAAAAAAAAAAAAAAAR        `.    `.   `.        :
                                \. . .\\   : . . . :
                                 \. . .:    `.. . .:
                                  `..:.:\\    \:...\\
                                   ;:.:.;      ::...:
                                   ):%::       :::::;
                               __,::%:(        :::::
                            ,;:%%%%%%%:        ;:%::
                              ;,--""-.`\\ ,=--':%:%:\\
                             /"       "| /-".:%%%%%%%\\
                                             ;,-"'`)%%)   
                                            /"      "|
                                                """

UNZIP = """
    <->      <=>
     <=>    <->
      <->  <=>
       <=><->
       <-><=>
        ;--;
        |  |
        |  |
        |LI|    I'MMA UNZIP DIS BITCH
        \__/
        <=->
        <-=>
        <=->
        <-=>
        <=->
        <-=>
        <=->
        <-=>
"""

import sys

if __name__ == '__main__':
    if sys.argv[1] == 'zip':
        print UNZIP
    elif sys.argv[1] == 'rar':
        print UNRAR
    else:
        print "Usage: unarchiver.py zip|rar filename"